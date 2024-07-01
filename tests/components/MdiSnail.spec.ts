
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnail from "../../src/components/MdiSnail.vue";

test("MdiSnail snapshot", () => {
  const wrapper = mount(MdiSnail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
