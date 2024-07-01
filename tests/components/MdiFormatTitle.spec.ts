
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTitle from "../../src/components/MdiFormatTitle.vue";

test("MdiFormatTitle snapshot", () => {
  const wrapper = mount(MdiFormatTitle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
