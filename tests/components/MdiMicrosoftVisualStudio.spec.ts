
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftVisualStudio from "../../src/components/MdiMicrosoftVisualStudio.vue";

test("MdiMicrosoftVisualStudio snapshot", () => {
  const wrapper = mount(MdiMicrosoftVisualStudio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
