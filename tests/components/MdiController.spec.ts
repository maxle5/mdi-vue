
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiController from "../../src/components/MdiController.vue";

test("MdiController snapshot", () => {
  const wrapper = mount(MdiController, {});
  expect(wrapper.html()).toMatchSnapshot();
});
