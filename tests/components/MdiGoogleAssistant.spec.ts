
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleAssistant from "../../src/components/MdiGoogleAssistant.vue";

test("MdiGoogleAssistant snapshot", () => {
  const wrapper = mount(MdiGoogleAssistant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
