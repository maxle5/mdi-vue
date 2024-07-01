
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveRefresh from "../../src/components/MdiArchiveRefresh.vue";

test("MdiArchiveRefresh snapshot", () => {
  const wrapper = mount(MdiArchiveRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
