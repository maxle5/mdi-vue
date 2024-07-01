
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadDotsHorizontal from "../../src/components/MdiHeadDotsHorizontal.vue";

test("MdiHeadDotsHorizontal snapshot", () => {
  const wrapper = mount(MdiHeadDotsHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
