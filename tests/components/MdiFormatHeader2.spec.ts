
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader2 from "../../src/components/MdiFormatHeader2.vue";

test("MdiFormatHeader2 snapshot", () => {
  const wrapper = mount(MdiFormatHeader2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
