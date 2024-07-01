
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSonyPlaystation from "../../src/components/MdiSonyPlaystation.vue";

test("MdiSonyPlaystation snapshot", () => {
  const wrapper = mount(MdiSonyPlaystation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
