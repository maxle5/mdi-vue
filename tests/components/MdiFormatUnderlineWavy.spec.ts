
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatUnderlineWavy from "../../src/components/MdiFormatUnderlineWavy.vue";

test("MdiFormatUnderlineWavy snapshot", () => {
  const wrapper = mount(MdiFormatUnderlineWavy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
