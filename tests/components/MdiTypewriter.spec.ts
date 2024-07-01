
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTypewriter from "../../src/components/MdiTypewriter.vue";

test("MdiTypewriter snapshot", () => {
  const wrapper = mount(MdiTypewriter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
