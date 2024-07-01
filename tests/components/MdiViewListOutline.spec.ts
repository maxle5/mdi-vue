
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewListOutline from "../../src/components/MdiViewListOutline.vue";

test("MdiViewListOutline snapshot", () => {
  const wrapper = mount(MdiViewListOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
