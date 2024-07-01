
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreativeCommons from "../../src/components/MdiCreativeCommons.vue";

test("MdiCreativeCommons snapshot", () => {
  const wrapper = mount(MdiCreativeCommons, {});
  expect(wrapper.html()).toMatchSnapshot();
});
