
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStackpath from "../../src/components/MdiStackpath.vue";

test("MdiStackpath snapshot", () => {
  const wrapper = mount(MdiStackpath, {});
  expect(wrapper.html()).toMatchSnapshot();
});
