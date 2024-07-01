
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyOffOutline from "../../src/components/MdiFlaskEmptyOffOutline.vue";

test("MdiFlaskEmptyOffOutline snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
