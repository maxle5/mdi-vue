
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastle from "../../src/components/MdiCastle.vue";

test("MdiCastle snapshot", () => {
  const wrapper = mount(MdiCastle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
