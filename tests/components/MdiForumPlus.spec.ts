
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumPlus from "../../src/components/MdiForumPlus.vue";

test("MdiForumPlus snapshot", () => {
  const wrapper = mount(MdiForumPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
