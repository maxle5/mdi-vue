
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogPause from "../../src/components/MdiCogPause.vue";

test("MdiCogPause snapshot", () => {
  const wrapper = mount(MdiCogPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
