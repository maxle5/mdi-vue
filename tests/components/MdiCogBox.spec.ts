
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogBox from "../../src/components/MdiCogBox.vue";

test("MdiCogBox snapshot", () => {
  const wrapper = mount(MdiCogBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
