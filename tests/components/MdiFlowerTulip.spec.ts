
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerTulip from "../../src/components/MdiFlowerTulip.vue";

test("MdiFlowerTulip snapshot", () => {
  const wrapper = mount(MdiFlowerTulip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
