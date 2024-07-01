
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTractor from "../../src/components/MdiTractor.vue";

test("MdiTractor snapshot", () => {
  const wrapper = mount(MdiTractor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
