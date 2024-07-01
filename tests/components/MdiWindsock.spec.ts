
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindsock from "../../src/components/MdiWindsock.vue";

test("MdiWindsock snapshot", () => {
  const wrapper = mount(MdiWindsock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
