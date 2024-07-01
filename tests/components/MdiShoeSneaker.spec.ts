
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoeSneaker from "../../src/components/MdiShoeSneaker.vue";

test("MdiShoeSneaker snapshot", () => {
  const wrapper = mount(MdiShoeSneaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
