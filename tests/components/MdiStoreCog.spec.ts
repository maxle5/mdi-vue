
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreCog from "../../src/components/MdiStoreCog.vue";

test("MdiStoreCog snapshot", () => {
  const wrapper = mount(MdiStoreCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
