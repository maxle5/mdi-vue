
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseScrollWheel from "../../src/components/MdiMouseScrollWheel.vue";

test("MdiMouseScrollWheel snapshot", () => {
  const wrapper = mount(MdiMouseScrollWheel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
