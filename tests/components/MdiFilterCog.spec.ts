
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterCog from "../../src/components/MdiFilterCog.vue";

test("MdiFilterCog snapshot", () => {
  const wrapper = mount(MdiFilterCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
