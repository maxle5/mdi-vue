
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxController from "../../src/components/MdiMicrosoftXboxController.vue";

test("MdiMicrosoftXboxController snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxController, {});
  expect(wrapper.html()).toMatchSnapshot();
});
