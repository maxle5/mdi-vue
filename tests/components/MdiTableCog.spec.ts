
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableCog from "../../src/components/MdiTableCog.vue";

test("MdiTableCog snapshot", () => {
  const wrapper = mount(MdiTableCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
