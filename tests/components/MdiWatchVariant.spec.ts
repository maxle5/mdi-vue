
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchVariant from "../../src/components/MdiWatchVariant.vue";

test("MdiWatchVariant snapshot", () => {
  const wrapper = mount(MdiWatchVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
