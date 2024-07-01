
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftVisualStudioCode from "../../src/components/MdiMicrosoftVisualStudioCode.vue";

test("MdiMicrosoftVisualStudioCode snapshot", () => {
  const wrapper = mount(MdiMicrosoftVisualStudioCode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
