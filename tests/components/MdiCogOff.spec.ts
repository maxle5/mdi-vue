
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogOff from "../../src/components/MdiCogOff.vue";

test("MdiCogOff snapshot", () => {
  const wrapper = mount(MdiCogOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
