
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuUp from "../../src/components/MdiMenuUp.vue";

test("MdiMenuUp snapshot", () => {
  const wrapper = mount(MdiMenuUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
