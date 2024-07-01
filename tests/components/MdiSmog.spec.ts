
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmog from "../../src/components/MdiSmog.vue";

test("MdiSmog snapshot", () => {
  const wrapper = mount(MdiSmog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
