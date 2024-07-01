
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrashCanOutline from "../../src/components/MdiTrashCanOutline.vue";

test("MdiTrashCanOutline snapshot", () => {
  const wrapper = mount(MdiTrashCanOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
