
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerView from "../../src/components/MdiMicrosoftXboxControllerView.vue";

test("MdiMicrosoftXboxControllerView snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerView, {});
  expect(wrapper.html()).toMatchSnapshot();
});
