
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDanceBallroom from "../../src/components/MdiDanceBallroom.vue";

test("MdiDanceBallroom snapshot", () => {
  const wrapper = mount(MdiDanceBallroom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
