
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrashCan from "../../src/components/MdiTrashCan.vue";

test("MdiTrashCan snapshot", () => {
  const wrapper = mount(MdiTrashCan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
