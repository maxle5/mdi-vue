
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListChecks from "../../src/components/MdiFormatListChecks.vue";

test("MdiFormatListChecks snapshot", () => {
  const wrapper = mount(MdiFormatListChecks, {});
  expect(wrapper.html()).toMatchSnapshot();
});
