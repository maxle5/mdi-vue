
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverwareFork from "../../src/components/MdiSilverwareFork.vue";

test("MdiSilverwareFork snapshot", () => {
  const wrapper = mount(MdiSilverwareFork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
