
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyPlus from "../../src/components/MdiFlaskEmptyPlus.vue";

test("MdiFlaskEmptyPlus snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
