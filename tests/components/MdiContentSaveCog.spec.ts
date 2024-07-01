
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveCog from "../../src/components/MdiContentSaveCog.vue";

test("MdiContentSaveCog snapshot", () => {
  const wrapper = mount(MdiContentSaveCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
