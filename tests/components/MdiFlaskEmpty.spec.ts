
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmpty from "../../src/components/MdiFlaskEmpty.vue";

test("MdiFlaskEmpty snapshot", () => {
  const wrapper = mount(MdiFlaskEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
