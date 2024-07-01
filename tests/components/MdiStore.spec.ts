
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStore from "../../src/components/MdiStore.vue";

test("MdiStore snapshot", () => {
  const wrapper = mount(MdiStore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
