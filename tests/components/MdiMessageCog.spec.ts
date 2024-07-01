
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageCog from "../../src/components/MdiMessageCog.vue";

test("MdiMessageCog snapshot", () => {
  const wrapper = mount(MdiMessageCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
