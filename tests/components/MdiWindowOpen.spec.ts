
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowOpen from "../../src/components/MdiWindowOpen.vue";

test("MdiWindowOpen snapshot", () => {
  const wrapper = mount(MdiWindowOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
