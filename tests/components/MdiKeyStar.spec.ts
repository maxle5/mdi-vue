
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyStar from "../../src/components/MdiKeyStar.vue";

test("MdiKeyStar snapshot", () => {
  const wrapper = mount(MdiKeyStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
