
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefaultOutline from "../../src/components/MdiCursorDefaultOutline.vue";

test("MdiCursorDefaultOutline snapshot", () => {
  const wrapper = mount(MdiCursorDefaultOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
