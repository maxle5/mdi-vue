
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrap from "../../src/components/MdiWrap.vue";

test("MdiWrap snapshot", () => {
  const wrapper = mount(MdiWrap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
