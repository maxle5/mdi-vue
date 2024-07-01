
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverwareForkKnife from "../../src/components/MdiSilverwareForkKnife.vue";

test("MdiSilverwareForkKnife snapshot", () => {
  const wrapper = mount(MdiSilverwareForkKnife, {});
  expect(wrapper.html()).toMatchSnapshot();
});
