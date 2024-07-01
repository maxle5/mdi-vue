
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyOff from "../../src/components/MdiFlaskEmptyOff.vue";

test("MdiFlaskEmptyOff snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
