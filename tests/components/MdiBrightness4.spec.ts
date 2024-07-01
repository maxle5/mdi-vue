
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness4 from "../../src/components/MdiBrightness4.vue";

test("MdiBrightness4 snapshot", () => {
  const wrapper = mount(MdiBrightness4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
