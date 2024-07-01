
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandHeart from "../../src/components/MdiHandHeart.vue";

test("MdiHandHeart snapshot", () => {
  const wrapper = mount(MdiHandHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
