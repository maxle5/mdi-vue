
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnicorn from "../../src/components/MdiUnicorn.vue";

test("MdiUnicorn snapshot", () => {
  const wrapper = mount(MdiUnicorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
